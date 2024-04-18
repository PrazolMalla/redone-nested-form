import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Fieldset,Button,TextInput } from '@mantine/core';
import AssignedForm from './AssignedForm';

function TaskForm({projectIndex,control,register}:any) {
  const {fields,append,remove} = useFieldArray({
    control,
    name :`project.${projectIndex}.task`
  })
  return (
    <>
      {fields.map((item,index)=>{
        return(
        <Fieldset key={item.id} legend="Task" style={{marginLeft:'25px'}}>
          <TextInput withAsterisk placeholder='Task Name' label='Task Name' {...register(`project.${projectIndex}.task.${index}.taskName`)}/>
          <TextInput withAsterisk placeholder='Task Description' label='Task Description' {...register(`project.${projectIndex}.task.${index}.taskDescription`)}/>
          <br/>
          <AssignedForm {...{projectIndex:projectIndex,taskIndex:index,control,register}}></AssignedForm>
          <br />
          <br />
          <Button variant='filled' color='red' onClick={()=>remove(index)}>Delete Task</Button>
        </Fieldset>
        );
      })}
      <br/>
      <Button variant='filled' color='green' style={{marginLeft:'25px'}} onClick={()=>
        append({
          taskName:'',
          taskDescription:'',
          assigned:[{
            workerName:'',
            workerEmail:''
          }]
        })
      }>Add Task</Button>
      <br />
    </>
  )
}

export default TaskForm
