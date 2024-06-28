import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
const Manager = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPass, setshowPass] = useState(false);
  const [passArray, setpassArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpassArray(JSON.parse(passwords));
    }
  }, []);

  const handleEdit = (id) => {
    const obj = passArray.filter((item) => item.id === id);
    let toEdit = obj[0];
    reset({
      siteLink: `${toEdit.siteLink}`,
      userName: `${toEdit.userName}`,
      passWord: `${toEdit.passWord}`,
    });

    let newpassArr = passArray.filter((item) => item.id !== id);
    setpassArray(newpassArr);
    localStorage.setItem(
      "passwords",
      JSON.stringify(passArray.filter((item) => item.id !== id))
    );
  };

  const handleDelete = (id) => {
    let newpassArr = passArray.filter((item) => item.id !== id);
    setpassArray(newpassArr);
    localStorage.setItem(
      "passwords",
      JSON.stringify(passArray.filter((item) => item.id !== id))
    );
  };
  return (
    <div className="flex flex-col items-center gap-3 my-5 font-serif">
      <div className="display w-full flex flex-col items-center justify-center">
        <div className="logo text-purple-400">
          <a
            href="/"
            className="flex justify-center items-center text-slate-900"
          >
            <div className="font-bold text-lg">&lt;Pass</div>
            <div className="font-extrabold text-lg text-green-600">OP</div>
            <div className="font-bold text-lg">&gt;</div>
          </a>
        </div>
        <div className="txt font-serif">Your Own Password Manager</div>
      </div>
      <form
        className="flex flex-col gap-3 items-center"
        onSubmit={handleSubmit((data) => {
          setpassArray([...passArray, { ...data, id: uuidv4() }]);
          localStorage.setItem(
            "passwords",
            JSON.stringify([...passArray, { ...data, id: uuidv4() }])
          );
          reset({
            siteLink: "",
            userName: "",
            passWord: "",
          });
        })}
      >
        <div className="websiteLink w-full">
          <input
            {...register("siteLink", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
            placeholder="Enter site link"
            className="w-full border-2 border-purple-600 rounded-2xl px-8 text-xs py-2 "
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 relative">
          <input
            {...register("userName", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
            placeholder="Enter Username"
            className="border-2 border-purple-600 rounded-2xl w-full md:w-3/5 px-8 py-2 text-xs "
          />
          <input
            {...register("passWord", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min lenght is 4",
              },
            })}
            type={`${showPass ? "text" : "password"}`}
            placeholder="Enter Password"
            className="border-2 border-purple-600 rounded-2xl w-full text-xs md:w-2/5 px-8 py-2"
          />
          <svg
            onClick={() => {
              setshowPass(!showPass);
            }}
            className={`absolute right-1 top-12 md:top-2 cursor-pointer ${
              showPass ? "" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#000000"
            fill="none"
          >
            <path
              d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <svg
            onClick={() => {
              setshowPass(!showPass);
            }}
            className={`absolute right-1 top-12 md:top-2 cursor-pointer ${
              showPass ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#000000"
            fill="none"
          >
            <path
              d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLlinejoin="round"
            />
            <path
              d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421"
              stroke="currentColor"
              strokeWidth="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 3L21 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-sm bg-purple-500 rounded-xl px-4 py-1 hover:bg-purple-400 transition-all ease-in-out flex items-center justify-center cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          <input
            type="submit"
            value="Save Password"
            className="cursor-pointer"
          />
        </div>
      </form>
      <h1 className="bg-purple-300 rounded-full px-3 my-3">Your PassWords</h1>
      <table className="table-auto ">
        <thead className="bg-purple-400">
          <tr>
            <th className=" md:px-10 text-center py-1">Site</th>
            <th className=" md:px-10 text-center py-1">Username</th>
            <th className=" md:px-10 text-center py-1">Password</th>
            <th className=" md:px-10 text-center py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {passArray.map((item) => {
            return (
              <tr key={item.id} className="bg-purple-100">
                <td className=" md:px-10 text-center py-1">{item.siteLink}</td>
                <td className=" md:px-10 text-center py-1">{item.userName}</td>
                <td className=" md:px-10 text-center py-1">{item.passWord}</td>
                <td className=" md:px-10 text-center py-1 flex items-center justify-between">
                  <div
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/wuvorxbv.json"
                      trigger="hover"
                      style={{
                        cursor: "pointer",
                        width: "15px",
                        height: "15px",
                      }}
                    ></lord-icon>
                  </div>
                  <div
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/drxwpfop.json"
                      trigger="hover"
                      style={{
                        cursor: "pointer",
                        width: "15px",
                        height: "15px",
                      }}
                    ></lord-icon>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Manager;
