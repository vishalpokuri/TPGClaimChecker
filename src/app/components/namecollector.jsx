import { Input } from "@/components/ui/input";
import Button from "../components/button";
import { useState } from "react";
import axios from "axios";
export default function Namecollection({ className, address }) {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");
  const collectedaddy = address;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios("/api/eligible", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { name: inputVal, address: collectedaddy },
      });

      if (!response.ok) {
        throw new Error("Failed to save eligible address");
      }

      const responseData = await response.json();
      console.log("Server response: ", responseData);
      setResult({
        msg: "You've submitted your entry successfully",
        flag: true,
      });
    } catch (err) {
      console.error("Error saving eligible address:", err);
      setResult({
        msg: "Unsuccessful attempt",
        flag: false,
      });
    }
  };
  return (
    <>
      <h1>How would you like your name on the NFT?</h1>
      <div className={className}>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-row items-center w-[650px]"
        >
          <Input
            id="name"
            type="text"
            value={inputVal}
            placeholder="Enter name"
            onChange={(e) => setInputVal(e.target.value)}
          />{" "}
          <Button name="Send" />
        </form>
        <br />
        <br />
        {result && (
          <div className="mx-5">
            {result.flag ? (
              <p className="text-green-600 max-w-[650px]">{result.msg}</p>
            ) : (
              <p className="text-red-600 max-w-[650px]">{result.msg}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
