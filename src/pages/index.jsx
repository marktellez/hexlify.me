import { useState, useEffect } from "react";
import { utils } from "ethers";

export default function Homepage() {
  const [integer, setInteger] = useState("");
  const [hex, setHex] = useState("");

  useEffect(() => {
    const { hexlify } = utils;
    setHex(hexlify(parseInt(integer)));
  }, [integer]);

  useEffect(() => {
    setInteger(Number(parseInt(hex)));
  }, [hex]);

  return (
    <div className="mt-16 container mx-auto">
      <div className="p-16">
        <h1>Hexlify a number, easily.</h1>
        <div className="flex space-x-8 justify-around">
          <div className="w-1/2">
            <input
              className="border px-2 py-1 text-3xl w-full"
              type="text"
              placeholder="Enter an integer to be hexlified..."
              value={integer}
              onChange={(e) => setInteger(e.target.value.replace(/[^0-9]/, ""))}
            />
          </div>
          <div className="w-1/2">
            <input
              className="border px-2 py-1 text-3xl w-full"
              type="text"
              placeholder="Enter a hex to get the integer"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
