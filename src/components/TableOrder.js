import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { DELIVERY_METHOD } from '~/utils/enum';
import { formatPrice } from '~/utils/format';
import CustomDataTable from './CustomDataTable';
import getStatusComponent from './Status';
import { formatDate } from '~/utils/dateFormat';

const TableOrder = ({ data, isAdmin = false }) => {
  const columns = [
    {
      name: 'ID',
      width: '80px',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Ngày',
      selector: (row) => formatDate(row.createdDate),
    },
    {
      name: 'Địa chỉ',
      grow: 3,
      selector: (row) => row.customer.address,
    },
    {
      name: 'SĐT',
      selector: (row) => row.customer.phone,
    },
    {
      name: 'Tổng đơn',
      selector: (row) => formatPrice(row.total),
    },
    {
      name: 'Phương thức',
      selector: (row) => {
        return row.orderType === DELIVERY_METHOD[0].id ? (
          <div>Tại cửa hàng</div>
        ) : (
          <div>Giao hàng</div>
        );
      },
    },
    {
      name: 'Trạng thái',
      selector: (row) => getStatusComponent(row.status),
    },
    {
      name: 'Chi tiết',
      button: true,
      cell: (row) => (
        <Link
          to={
            isAdmin ? `/admin/orders/${row.id}` : `/employee/orders/${row.id}`
          }
        >
          {' '}
          <Icon icon='mdi:eye-plus-outline' />
        </Link>
      ),
      style: {
        color: 'var(--primary-color)',
        cursor: 'pointer',
        fontSize: '1.8rem',
      },
    },
    {
      name: 'Nhân viên',
      selector: (row) => row.employee_name,
    },
  ];
  return (
    <div className='table-wrapper'>
      <CustomDataTable data={data} columns={columns} />
    </div>
  );
};

const ORDER_STATUS = {
  0: 'Chờ xử lí',
  1: 'Đang giao',
  2: 'Thành công',
  3: 'Đã hủy',
};

const ORDER_TYPE = {
  0: 'Trực tiếp',
  1: 'Giao hàng',
};
export default TableOrder;

const parseData = (value, key) => {
  const dateKeys = ['createdDate'];
  const orderStatus = 'status';
  const orderType = 'orderType';
  if (value === null || value === undefined) {
    return 'N/A';
  }
  if (dateKeys.includes(key)) {
    return formatDate(value);
  }
  if (key === orderStatus) {
    return ORDER_STATUS[Number.parseInt(value)];
  }
  if (key === orderType) {
    return ORDER_TYPE[Number.parseInt(value)];
  }
  return value;
};
function convertArrayOfObjectsToCSV({ data }) {
  let result;

  const columnDelimiter = ',';
  const lineDelimiter = '\n';
  const keys = Object.keys(data[0]).filter(
    (item) => typeof data[0][item] !== 'object'
  );

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;
      result += parseData(item[key], key);
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}
export const downloadCSV = ({ data, fileName = 'export.csv' }) => {
  const link = document.createElement('a');
  let csv = convertArrayOfObjectsToCSV({ data });
  if (csv == null) return;

  // Add Byte Order Mark (BOM) character for correct encoding
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, csv], { type: 'text/csv;charset=utf-8;' });

  if (!blob) {
    console.error('Failed to create CSV Blob');
    return;
  }

  if (navigator.msSaveBlob) {
    // For Internet Explorer
    navigator.msSaveBlob(blob, fileName);
  } else {
    // For other browsers
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
