import React from "react";

const TaskForm = () => {
    return (
        <div className="w-screen flex justify-center">
            <form action="" method="post">
                <fieldset className="flex flex-col gap-2">
                    <legend className="text-center font-black text-2xl text-[#020617] underline">Create new task</legend>
                    <div>
                        <input type="text" name="" id="" placeholder="Enter task title" className="w-100 rounded p-2 px-3"/>
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter task descriptions here..." className="w-100 rounded  p-2 px-3"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="border rounded p-1 px-3">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default TaskForm;