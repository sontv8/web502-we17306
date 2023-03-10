export { }
// let username: number = "sontv";
/*
    Mảng số
    Mảng chuỗi
    Mảng mix 
*/

const arrNumber: number[] = [1, 2, 3]
const arrSts: string[] = ["abc", "def"]
const arrMix: Array<number | string> = [123, "abcd"]

const project: { id: number, name: string, image: string } = {
    id: 1,
    name: "Du an 1",
    image: ""
}
const getProject = (props: { id: number, name: string, image: string }) => {

}
getProject(project)