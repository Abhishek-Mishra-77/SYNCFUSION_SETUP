import { useState } from "react";
import Question from "./Question";

const Home = () => {
      const [count, setCount] = useState(0);
    
      const data = [
        {
          id: 1,
          question: "Who is PM of India?",
          options: {
            a: "Modi",
            b: "yogi",
            c: "rahul",
            d: "kejriwal",
          },
        },
        {
          id: 2,
          question: "Who is CM of UP?",
          options: {
            a: "Amit shah",
            b: "yogi",
            c: "rahul",
            d: "kejriwal",
          },
        },
        {
          id: 3,
          question: "Who is CM of bihar?",
          options: {
            a: "Modi",
            b: "yogi",
            c: "rahul",
            d: "Nitish",
          },
        },
        {
          id: 4,
          question: "What is Capital of India?",
          options: {
            a: "Delhi",
            b: "lucknow",
            c: "Jaipur",
            d: "Banglore",
          },
        },
        {
          id: 5,
          question: "What is Capital of UP?",
          options: {
            a: "Lucknow",
            b: "Agra",
            c: "Firozabad",
            d: "Etah",
          },
        },
      ];
    
      const increment = () => {
        setCount(count + 1);
      };
    
      const decrement = () => {
        setCount(count - 1);
      };
    
      const isNextDisabled = count >= data.length - 1;
      const isPrevDisabled = count <= 0;
  return (
    <div>
      <div>
      {/* Header */}
        <div className="navbar flex justify-between items-center px-5 h-20 bg-blue-500">
          <div className="name text-white">think exam</div>
          <div className="login text-red-800 text-xl">Client Login</div>
        </div>

        <div className="content flex flex-col lg:flex-row justify-between items-start p-1 h-full w-full">

          {/* Qutions and options */}
          <div className="question px-10 w-full">
            <Question
              id={data[count].id}
              question={data[count].question}
              options={data[count].options}
            />

            {/* Buttons */}
            <div className="buttons flex justify-between items-center">
              <div className="btn1 lg:flex-row sm:flex-col">
                <button
                  className="m-2 p-2 w-20 bg-green-500 rounded-md text-white"
                  onClick={() => {
                    decrement();
                  }}
                  disabled={isPrevDisabled}
                  style={isPrevDisabled ? { backgroundColor: "#bbf7d0" } : {}}
                >
                  Previous
                </button>
                <button
                  className=" p-2  w-20 bg-green-500 rounded-md text-white"
                  onClick={() => {
                    increment();
                  }}
                  disabled={isNextDisabled}
                  style={isNextDisabled ? { backgroundColor: "#bbf7d0" } : {}}
                >
                  Next
                </button>
              </div>
              <div className="btn2">
                <button
                  className="p-2 w-40 bg-green-500 rounded-md text-white"
                  onClick={() => {
                    increment();
                  }}
                  disabled={isNextDisabled}
                  style={isNextDisabled ? { backgroundColor: "#bbf7d0" } : {}}
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>

          {/* question pallete */}
          <div className="questionbox bg-gray-100 py-10 w-full lg:w-1/3">
            <p className="text-center my-2 ">Questions Palette</p>
            <div className="boxes">
              <div className="box1 flex justify-center m-4">
                <button
                  className="h-14 w-14 bg-gray-200 rounded-lg hover:bg-green-200 active:bg-green-500 m-4"
                  onClick={() => {
                    setCount(0);
                  }}
                  style={count == 0 ? { backgroundColor: "#16a34a" } : {}}
                >
                  1
                </button>
                <button
                  className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4"
                  onClick={() => {
                    setCount(1);
                  }}
                  style={count == 1 ? { backgroundColor: "#16a34a" } : {}}
                >
                  2
                </button>
                <button
                  className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4"
                  onClick={() => {
                    setCount(2);
                  }}
                  style={count == 2 ? { backgroundColor: "#16a34a" } : {}}
                >
                  3
                </button>
                <button
                  className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4"
                  onClick={() => {
                    setCount(3);
                  }}
                  style={count == 3 ? { backgroundColor: "#16a34a" } : {}}
                >
                  4
                </button>
              </div>
              <div className="box2 flex justify-center m-4">
                <button
                  className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4"
                  onClick={() => {
                    setCount(4);
                  }}
                  style={count == 4 ? { backgroundColor: "#16a34a" } : {}}
                >
                  5
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  6
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  7
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  8
                </button>
              </div>
              <div className="box3 flex justify-center m-4">
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  9
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  10
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  11
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  12
                </button>
              </div>
              <div className="box4 flex justify-center m-4">
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  13
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  14
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  15
                </button>
                <button className="h-14 w-14 bg-gray-200 rounded-md hover:bg-green-200 active:bg-green-500 m-4">
                  16
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
