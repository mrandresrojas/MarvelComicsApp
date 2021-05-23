export interface Comic{

    id: number;
    title: string;
    issueNumber:string;
    variantDescription: string;
    description:string;
    urls?:Url[]
    images?:Image[]
    path: string;
    extension:string;


}
export interface Url{
type: string;
url:string;

}
export interface Image{
path: string;
extension:string;

}