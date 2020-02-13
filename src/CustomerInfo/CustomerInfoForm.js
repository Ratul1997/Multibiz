export default Forms = [
    {
        key: "Name",
        header: "Customer Name",
        inputTypeText: true,
        security: false,
        sizeFactor: 3,
        required: false,
        newline:false,
    },
    {
        key: "PhoneNo",
        header: "Customer Phone No",
        inputTypeText: false,
        security: false,
        newline:false,
        required: false,
        sizeFactor: 3
    },
    {
        key: "Address",
        header: "Customer Address",
        inputTypeText: true,
        security: false,
        newline:true,
        required: false,
        sizeFactor: 5
    },
    {
        key: "Area",
        header: "Customer Area",
        inputTypeText: false,
        required: false,
        newline:false,
        security: false,
        sizeFactor: 3
    }, {
        key: "Instruction",
        header: "Instruction",
        security: false,
        required: false,
        newline: true,
        inputTypeText: true,
        sizeFactor: 5
    }, {
        key: "DeliveryCharge",
        header: "Delivery Charge",
        required: false,
        inputTypeText: true,
        newline:false,
        security: false,
        sizeFactor: 3
    },
    {
        key: "Taken",
        header: "Taken By",
        inputTypeText: true,
        security: false,
        newline:true,
        required: false,
        sizeFactor: 3
    },
]