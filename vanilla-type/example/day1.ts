// {
//     let user: number;
//     user = 123;
//     console.log(user);

// }
// // định nghĩa kiểu dữ liệu của biến:
// // [từ khoá] [tên biến ] : [kiểu dữ liệu] = [gía trị];


// function sum(a: number, b: number): number {
//     let result = a + b;
//     console.log(result);
//     return result;
// }
// sum(4, 5)


interface Person {
    id: number,
    username: string
}
const user: Person = {
    id: 1,
    username: "123",
}
interface Employee extends Person {
    email: string,
    age?: number,
    readonly salary: number
}
const employee: Employee = {
    id: 1,
    username: "sontv",
    email: "sontv@gmail.com",
    salary: 5000
}
// console.log(employee.salary);w
employee.salary = 1000;

/*
    interface được sử dụng để định nghĩa ra cấu trúc của Object
    khi đặt tên interface luôn luôn bắt đầu bằng chữ viết hoa
    interface có thể kế thưà từ interface khác thông qua từ khoá là extends

    các thuộc tính được hỗ trợ trong interface 
        - required - thuoc tinh bắt buộc phải có
        - optinal - thuoc tinh có thể có hoặc không
        - readonly - thuoc tinh chi doc
*/
