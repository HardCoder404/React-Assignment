import { Input, Pagination } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import useApiStore from "../../store/useApiStore";
import { useEffect } from "react";
import usePaginationStore from "../../store/paginationHandler";
import useWindowSize from "../../hooks/useWindowSize";

const TableContent = () => {
    const { width } = useWindowSize();
    const { users, loading, fetchUsers } = useApiStore();
    const { currentPage, pageSize, setCurrentPage, setPageSize } = usePaginationStore();

    console.log("Usres: ",users);
    
    useEffect(() => {
        fetchUsers(currentPage,pageSize);
    }, [currentPage,pageSize]);

    const deviceColumns: ColumnsType<any> = [
        {
            render: (_, record) => (
                <div className="mobile-table">
                    <span className="odd-col-mobile">
                        <h2>Username</h2>
                        <h4>{record.username}</h4>
                    </span>
                    <span className="even-col-mobile">
                        <h2>Name</h2>
                        <h4>{record.name}</h4>
                    </span>
                    <span className="odd-col-mobile">
                        <h2>Email ID</h2>
                        <h4>{record.email}</h4>
                    </span>
                    <span className="even-col-mobile">
                        <h2>Address</h2>
                        <h4>{record?.address?.street}, {record?.address?.city} - {record?.address?.zipcode}</h4>
                    </span>
                    <span className="odd-col-mobile">
                        <h2>Contact Number</h2>
                        <h4>{record.phone}</h4>
                    </span>
                    <span className="actions-mobile">
                        {/* Add actions if needed */}
                    </span>
                </div>
            ),
        },
    ];

    const columns: ColumnsType<any> = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email ID',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (record) => <span>{record?.street},{record?.city}-{record?.zipcode}</span>,
        },
        {
            title: 'Contact Number',
            dataIndex: 'phone',
            key: 'phone',
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold mx-5 my-5">User List</h1>
                <Input className="w-80 bg-transparent" placeholder="Search" />
            </div>
            <div className="shadow rounded-md mb-6 responsive-done">
                <Table
                    columns={width > 768 ? columns : deviceColumns}
                    dataSource={users.map((user) => ({
                        ...user,
                        key: user.id,
                    }))}
                    pagination={false}
                    loading={loading}
                    scroll={{ x: true }}
                    className="my-custom-table"
                    rowClassName={(_, index) => (index % 2 === 0 ? "row-even" : "row-odd")}
                />

                <div className="w-full flex justify-end p-3">
                    <Pagination
                        total={users.length}
                        current={currentPage}
                        pageSize={5}
                        onChange={(page, newPageSize) => {
                            setCurrentPage(page);
                            setPageSize(newPageSize);
                            fetchUsers(page, newPageSize); // Fetch users based on the selected page and size
                        }}
                        showTotal={(total, range) => `Showing ${range[0]} to ${range[1]} of ${total} Entries`}
                        className="my-custom-table"
                    />
                </div>
            </div>
        </div>
    );
};

export default TableContent;
