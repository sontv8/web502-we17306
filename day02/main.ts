export { }
// let username: number = "sontv";
/*
    Mảng số
    Mảng chuỗi
    Mảng mix 
*/



interface IProject {
    id: number,
    name: string,
    image: string
}

const project: IProject = {
    id: 1,
    name: "Du an 1",
    image: ""
}

const getProject = (props: IProject): IProject => {
    return props
}
getProject(project)

/*
    Định nghĩa kiểu dữ liệu cho mảng projectList
    Mảng này chứa 2 Object 
    Mỗi Object chứa 2 thuộc tính là id và name

    tạo 1 hàm getData nhận vào tham số là 1 mảng chứa object như trên
    định nghĩa kiểu dữ liệu của tham số truyền vào và kiểu dữ liệu trả về
*/

const arrNumber: number[] = [1, 2, 3]
const arrSts: string[] = ["abc", "def"]
const arrMix: Array<number | string> = [123, "abcd"]

// const projectList: Array<{ id: number, name: string }> = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" }
// ]

// interface IProject {
//     id: number,
//     name: string
// }
// const projectList: IProject[] = [
//     { id: 1, name: "Du an mau", image: "" },
//     { id: 2, name: "Du an 1", image: "" }
// ]

// interface ISumFunction {
//     (a: number, b: number): number
// }
// const sum: ISumFunction = (a, b) => {
//     return 123
// }


// interface IData {
//     id: number,
//     name: string
// }
// interface IGetdataFunc {
//     (data: IData[]): IData[]
// }

// const getData = (data: IData[]): void => {
//     // return data
// }

const projectList = [
    { id: 1, name: "Du an mau" },
    { id: 2, name: "Du an 1" }
]
const showProject = (projects) => {
    const app = document.querySelector("#app")
    if (app) {
        app.innerHTML = projects.map()
    }
    // map và hiển thị ra html
}
showProject(projectList)

