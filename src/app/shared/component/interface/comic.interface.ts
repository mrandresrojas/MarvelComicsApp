export interface Comic{

    id: number;
    title: string;
    issueNumber:string;
    variantDescription: string;
    descrption:string;
    urls?:Url[]
    images?:Image[]


}
export interface Url{
type: string;
url:string;

}
export interface Image{
path: string;
extension:string;

}