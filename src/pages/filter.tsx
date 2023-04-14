import React, { useState, useMemo } from 'react'
import { Task, ViewMode } from '../types/public-types'
import { initTasks } from '../helper'
import { Gantt } from '../components/gantt/gantt'

//Style
import tw from "twin.macro";

// UI
import Search from '../ui/Search'
import DateInput from '../ui/DateInput'

const styles = {
  container: tw`p-1 flex gap-1`,
}

//types
interface FormState {
  search: string;
  from: string;
  to: string;
}

const Filter = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day)
  const [tasks, setTasks] = useState<Task[]>(initTasks())

  const [form, setForm] = useState<FormState>({
    search: "",
    from: "",
    to: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  let columnWidth = 65

  const filterTasks = useMemo(
    () => tasks.filter((task) => {
      const name = task.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalize and remove accents
      const taskType = task.taskType? task.taskType.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : ""; // Normalize and remove accents
      const search = form.search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase(); // Normalize, remove accents, and convert to lowercase
      
      if(form.from !== "" && form.to !== ""){
        const fromDate = new Date(form.from);
        fromDate.setHours(0);
        fromDate.setMinutes(0);
        fromDate.setSeconds(0);
        fromDate.setMilliseconds(0);

        const toDate = new Date(form.to);
        toDate.setHours(0);
        toDate.setMinutes(0);
        toDate.setSeconds(0);
        toDate.setMilliseconds(0);

        const itemDate = new Date(task.start);

        return (itemDate >= fromDate && itemDate <= toDate) && (name.toLocaleLowerCase().includes(search) || taskType.toLocaleLowerCase().includes(search))
      }
      
      return name.toLocaleLowerCase().includes(search) || taskType.toLocaleLowerCase().includes(search);
    }),
    [form]
  );


  return (
    <div className="Wrapper">
      <section css={[styles.container]}>
        <Search search={form.search} handleChange={handleChange} />
        {/* <DateInput name="from" dateText={form.from} handleChange={handleChange} />
        <DateInput name="to" dateText={form.to} handleChange={handleChange} /> */}
      </section>
      {
        filterTasks.length > 0 &&
        <Gantt
          columns={[{key:"taskType", value:"Task type"}]}
          tasks={filterTasks}
          viewMode={view}
          listCellWidth={"155px"}
          columnWidth={columnWidth}
        />
      }
    </div>
  )
}
export default Filter
