import React, { useState, useMemo } from 'react'
import { Task, ViewMode } from '../types/public-types'
import { initTasks } from '../helper'
import { Gantt } from '../components/gantt/gantt'

//Style
import tw from "twin.macro";

// UI
import Search from '../ui/Search'

const styles = {
  container: tw`p-1`,
}

//types
interface FormState {
  search: string;
}

const Filter = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day)
  const [tasks, setTasks] = useState<Task[]>(initTasks())

  const [form, setForm] = useState<FormState>({
    search: "",
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
      const name = task.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalizar y eliminar acentos
      const search = form.search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase(); // Normalizar, eliminar acentos y convertir a minúsculas
      return name.toLocaleLowerCase().includes(search);
    }),
    [form]
  );



  return (
    <div className="Wrapper">
      <section css={[styles.container]}>
        <Search search={form.search} handleChange={handleChange} />
      </section>
      {
        filterTasks.length > 0 &&
        <Gantt
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
