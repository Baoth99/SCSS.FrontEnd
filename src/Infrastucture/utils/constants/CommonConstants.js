export const PAGING = 7;

export const PENDING_BOOKING = 1;
export const CANCELBYSELLER_BOOKING = 2;
export const CANCELBYCOLLECTOR_BOOKING = 3;
export const APPROVED_BOOKING = 4;
export const COMPLETED_BOOKING = 5;
export const CANCELBYSYSTEM_BOOKING = 6;

export const SCRAP_CATEGORY_ACTIVE = 1;
export const SCRAP_CATEGORY_DE_ACTIVE = 2;
export const SCRAP_CATEGORY_ACTIVE_MESSAGE = "Đang Sử Dụng";
export const SCRAP_CATEGORY_DE_ACTIVE_MESSAGE = "Thôi Sử Dụng";

export const NOT_APPROVE_NUM = 1;
export const ACTIVE_NUM = 2;
export const BANNING_NUM = 3;
export const REJECT_NUM = 4;

export const SELLER_NUM = 2;
export const DEALER_NUM = 3;
export const COLLECTOR_NUM = 4;
export const DEALER_MEM_NUM = 5;

export const NOT_APPROVE_STYLE = "bg-info";
export const ACTIVE_STYLE = "bg-success";
export const BANNING_STYLE = "bg-danger";

export const BLOCK_ACCOUNT_STYLE = "btn btn-danger";
export const UNBLOCK_ACCOUNT_STYLE = "btn btn-success";
export const APPROVE_ACCOUNT_STYLE = "btn btn-info";

export const PENDING_BOOKING_STYLE = "bg-primary";
export const CANCELBYSELLER_BOOKING_STYLE = "bg-danger";
export const NOBODY_APPROVE_BOOKING_STYLE = "bg-warning";
export const APPROVED_BOOKING_STYLE = "bg-info";
export const COMPLETED_BOOKING_STYLE = "bg-success";


export const MALE = "Nam";
export const FEMALE = "Nữ";

export const MALE_NUM = 1;
export const FEMALE_NUM = 2;

export const DC_TRANSACTION_COLUMN = [
    "STT",
    "Mã Giao Dịch",
    "Tên Chủ Vựa",
    "Số ĐT Chủ Vựa",
    "Tên Người Thu Gom",
    "Số ĐT Người Thu Gom",
    "Thời Điểm Giao Dịch",
    "Tổng Giá"
]

export const CS_TRANSACTION_COLUMN = [
    'STT',
    'Mã Giao Dịch',
    'Tên Người Bán',
    'Số ĐT Người Bán',
    'Tên Người Thu Gom',
    'Số ĐT Người Thu Gom',
    'Thời Điểm Giao Dịch',
    'Tổng Đơn Giá',
]

export const COLLECTOR_REQUEST_REGISTER_COLUMN = [
    'STT',
    'Số Điện Thoại',
    'Tên Người Thu Gom',
    'Giới Tính',
    'Thời Điểm Đăng Kí',
    'Trạng Thái'
]

export const DEALER_REQUEST_REGISTER_COLUMN = [
    'STT',
    'Số Điện Thoại',
    'Tên Chủ Vựa',
    'Tên Vựa',
    'Giới Tính',
    'Thời Điểm Đăng Kí',
    'Trạng Thái'
]

export const GENDER = [
    {
        key: MALE_NUM,
        val: MALE
    },
    {
        key: FEMALE_NUM,
        val :FEMALE
    }
]

export const ScrapCategoryStatus = [
    {
        key: SCRAP_CATEGORY_ACTIVE,
        val: 'Đang Sử Dụng'
    },
    {
        key: SCRAP_CATEGORY_DE_ACTIVE,
        val: 'Thôi Sử Dụng'
    }
]

export const DEALER_STATUS = [
    {
        key: true,
        val: 'Đang Hoạt Động'
    },
    {
        key: false,
        val: 'Tạm Dừng'
    }
]
export const DEALER_LEADER = 1;
export const DEALER_MEMBER = 2;
export const DEALER_LEADER_MESSAGE = 'Vựa Chủ';
export const DEALER_MEMBER_MESSAGE = 'Vựa Chi Nhánh';

export const DEALER_TYPE = [
    {
        key: DEALER_LEADER,
        val: DEALER_LEADER_MESSAGE
    },
    {
        key: DEALER_MEMBER,
        val: DEALER_MEMBER_MESSAGE
    }
]

export const BOOKING_STATUS = [
    {
        key: PENDING_BOOKING,
        val: "Đang Chờ"
    },
    {
        key: CANCELBYSELLER_BOOKING,
        val: "Người Bán Hủy"
    },
    {
        key: CANCELBYCOLLECTOR_BOOKING,
        val: "Người Thu Gom Hủy"
    },
    {
        key: APPROVED_BOOKING,
        val: "Đã Chấp Thuận"
    },
    {
        key: COMPLETED_BOOKING,
        val: "Đã Hoàn Thành"
    },
    {
        key: CANCELBYSYSTEM_BOOKING,
        val: "Hệ Thống Hủy"
    }
];


export const STATUS_REQUEST = [
    {
        key: NOT_APPROVE_NUM,
        val: "Đợi Chấp Thuận"
    },
    {
        key: REJECT_NUM,
        val :"Từ Chối"
    },
]


export const STATUS = [
    {
        key: ACTIVE_NUM,
        val :"Đang Hoạt Động"
    },
    {
        key: BANNING_NUM,
        val :"Đang Bị Khóa"
    }
]

export const ROLE = [
    {
        key: SELLER_NUM,
        val: "Người Bán"
    },
    {
        key: DEALER_NUM,
        val :"Chủ Vựa"
    },
    {
        key: COLLECTOR_NUM,
        val :"Người Thu Gom"
    }
]

export const SCRAP_CATEGORY_ROLE = [
    {
        key: DEALER_NUM,
        val :"Chủ Vựa"
    },
    {
        key: COLLECTOR_NUM,
        val :"Người Thu Gom"
    }
]

export const TransactionType = {
    SELL_COLLECT : 1,
    COLLECT_DEAL: 2
}
