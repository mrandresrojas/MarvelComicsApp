export interface Comic{

    id: number;
    title: string;
    issueNumber:string;
    variantDescription: string;
    descrption:string;
  urls:Url[]
    


}
export interface Url{
type: string;
url:string;

}