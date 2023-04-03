import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const ProductManagementPage = (props) => {
    const removeProduct = (id) => {
        props.onRemove(id)
    }

    const data = props.products.map(item => {
        return {
            key: item.id,
            name: item.name,
            price: item.price
        }
    })
    // const data: DataType[] = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 2, showQuickJumper: true }} />
}

export default ProductManagementPage