import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Calculator() {
  const buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
  ];

  function inputChangeHandler(e) {
    console.log(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center gap-5 w-md m-auto h-screen">
      <h2 className="text-4xl text-center font-medium text-white">
        CBR - Calculator
      </h2>
      <div className="bg-blue-950 text-white rounded-xl">
        <Input
          type="number"
          className="outline-none border-none text-3xl! font-bold h-20 focus-visible:ring-0 text-right"
          onKeyDown={(e) => {
            if (
              e.key === "e" ||
              e.key === "E" ||
              e.key === "+" ||
              e.key === "-"
            ) {
              e.preventDefault();
            }
          }}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="p-5 rounded-2xl bg-blue-950">
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <Button
              key={btn}
              variant="outline"
              className="p-7 bg-gray-200 text-xl cursor-pointer border-b-5 border-gray-900 rounded-2xl"
            >
              {btn}
            </Button>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2.5 mt-2.5">
          {["RESET", "="].map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex-1 p-7 bg-gray-200 text-xl cursor-pointer border-b-5 border-gray-900 rounded-2xl"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
