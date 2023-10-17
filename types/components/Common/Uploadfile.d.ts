type UploadFileProps = {
    type: any;
    handleUpload: (files: any, type: any, fileData: any) => void;
};
declare const Uploadfile: ({ type, handleUpload }: UploadFileProps) => JSX.Element;
export default Uploadfile;
