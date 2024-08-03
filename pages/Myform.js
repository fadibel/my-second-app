import { useState } from "react";

export default function MyForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
  });

  function handleCheckboxChanged(event) {
    setFormInput({ ...formInput, isStudent: event.target.checked });
  }

  return (
    <form
      className="space-y-4 p-4 max-w-md mx-auto bg-white shadow-md rounded-md"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Enter your name:
        </label>
        <input
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={formInput.name}
          onChange={(event) =>
            setFormInput({ ...formInput, name: event.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={formInput.email}
          onChange={(event) =>
            setFormInput({ ...formInput, email: event.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Age:</label>
        <input
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={formInput.age}
          onChange={(event) =>
            setFormInput({ ...formInput, age: event.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Are you a student?
        </label>
        <input
          type="checkbox"
          className="mt-1"
          checked={formInput.isStudent}
          onChange={handleCheckboxChanged}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          General Info:
        </label>
        <textarea
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={formInput.generalInfo}
          onChange={(event) => {
            setFormInput({ ...formInput, generalInfo: event.target.value });
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country:
        </label>
        <select
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={formInput.country}
          onChange={(event) =>
            setFormInput({ ...formInput, country: event.target.value })
          }
        >
          <option>Algeria</option>
          <option>Tunisia</option>
          <option>Dubai</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status:
        </label>
        <div className="mt-1 flex items-center space-x-4">
          <label className="flex items-center">
            <input
              value="student"
              type="radio"
              name="status"
              className="form-radio"
              checked={formInput.status === "student"}
              onChange={(event) =>
                setFormInput({ ...formInput, status: event.target.value })
              }
            />
            <span className="ml-2">Student</span>
          </label>
          <label className="flex items-center">
            <input
              value="teacher"
              type="radio"
              name="status"
              className="form-radio"
              checked={formInput.status === "teacher"}
              onChange={(event) =>
                setFormInput({ ...formInput, status: event.target.value })
              }
            />
            <span className="ml-2">Teacher</span>
          </label>
        </div>
      </div>

      <div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
}
