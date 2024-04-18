import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
import { Button } from "@mantine/core";
import ProjectForm from "./ProjectForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    
  } = useForm({
    defaultValues:{
      project :[{
        projectName :'',
        projectDescription :'',
        task :[{
          taskName : '',
          taskDescription:'',
          assigned :[{
            workerName:'',
            workerEmail:''
          }]
        }]
      }]
    }
  })
  return (
  <>
    <form onSubmit={handleSubmit((data)=>{console.log("Data",data)})}>
      <ProjectForm {...{control,register,setValue,getValues}}></ProjectForm>
      <Button type="submit" variant="filled" color="green" style={{marginLeft:'25px'}}>Submit</Button>
    </form>
  </>
  );
}
