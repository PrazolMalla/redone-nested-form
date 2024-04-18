import React from 'react'
import { useFieldArray } from 'react-hook-form'
import { TextInput,Fieldset,Button } from '@mantine/core'
import TaskForm from './TaskForm'

function ProjectForm({control,register,setValue,getValues}:any) {
  const {fields,append,remove} = useFieldArray({
    control,
    name:'project'
  })
  return (
    <>
      <ul>
        {fields.map((item,index)=>{
          return(
            <li key={item.id}>
              <Fieldset legend="Project">
                <TextInput withAsterisk placeholder='Project Name' label='Project Name' {...register(`project.${index}.projectName`)}/>
                <TextInput withAsterisk placeholder='Project Description' label='Project Description' {...register(`project.${index}.projectDescription`)}/>
                <TaskForm  {...{projectIndex:index,control,register}}></TaskForm>
                <br/>
                <Button type='button' variant='filled' color='red' onClick={()=>{remove(index)}}>Delete Project</Button>
              </Fieldset>
            </li>
          )
        })}
      </ul>
      <Button type='button' variant='filled' color='green' style={{marginLeft:'25px'}}
        onClick={()=>{
          setValue('project',[
            ...(getValues().project||[]),{
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
          ])
        }}
      >Add Project</Button>
    </>
  )
}

export default ProjectForm
