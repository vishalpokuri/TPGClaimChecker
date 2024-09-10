import Button from "./button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
export default function FormSub() {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");
  const week2 = [
    "J9t5ix9Di6Smmdbt6x9KHenkYQUxYwBGYAeP6Uxagcun",
    "4Pz4XyLx7isfTijLfWbmMnwW3WgT7TyCQGBR7s1T6qeE",
    "E1w1XmG6fKwgNS3GUYNqyLeqc64ZZGLUedngv7Kdjz9P",
    "CHZMWthFc5iFP9RZEMtYhQPAjHvMCJn6jP3EYjhqgmDW",
    "CqBzLVZqiTy77PAzujcoLCWCDgYoevokirD3sgdmkoMY",
    "HEyc6xHRNkbaoL1MxKjYecd76CXaxziY3PAmugSEcatt",
    "7vJRv1Qm4r6UjZQqKqbMo1KG6ZUs11Thu4SxFGrrhgYW",
    "2Kir1ArAb8TFLFY4C6Tnfp5S9UkJyBmeJfNqBY8Xn2Mo",
    "FXUDDoc9rmM4gmepwfmg29b4hXc26qfVhVYRWe5L4NMA",
    "AQE8xC17CFE6sKDGumu8QbxdK5993pGa3Cuz11WvmTzj",
    "EMuQ1V7GTSNUpVpUBq2GEVZfa8V3JyodGuSae1ZQXqZd",
    "HxYZ7gZAvfFFi59eKyxncpN7FbC7PZFNH2o2AaGqsDjo",
    "5HA1neFrPTgYLGBHPgxP9C23vpvB772nSmYab921Q6kn",
    "5Wf2sZpupTo54GP3Vys3RefXJJUqAFcZFGs5za8ZiVUA",
    "HU3PkHJHxHysGLtbdGgMNtmfivLS8BSBkwba1EHHwsz9",
    "9Jcd3gzNzuK6pge2Ei3V4Fop8KvCRxP5UQ1YWTyqfbgu",
    "12C3BwNKvioUssevs4HDHPo5UjnNTG2mzsJto2Qo7fGg",
    "6t3iWzQwSyuvdVW2da1nzFfwuAhvk654KeBAi7mpxww3",
    "9cYmgwrRiHS9y57xSuoGFvw7a2Jug15bDgtJwpbDgjqJ",
    "4Uw77Awi42HHXXxMjTJRJTBfXtBDA4g6fwCaDbSiWKtM",
    "BmxKXa8E6of2kDJMDnrs4NNdiZ6fbtGTYhvN4EyJcHme",
  ];
  const week4 = [
    "2Kir1ArAb8TFLFY4C6Tnfp5S9UkJyBmeJfNqBY8Xn2Mo",
    "9Jcd3gzNzuK6pge2Ei3V4Fop8KvCRxP5UQ1YWTyqfbgu",
    "HEyc6xHRNkbaoL1MxKjYecd76CXaxziY3PAmugSEcatt",
    "7vJRv1Qm4r6UjZQqKqbMo1KG6ZUs11Thu4SxFGrrhgYW",
    "6t3iWzQwSyuvdVW2da1nzFfwuAhvk654KeBAi7mpxww3",
    "CHZMWthFc5iFP9RZEMtYhQPAjHvMCJn6jP3EYjhqgmDW",
    "EMuQ1V7GTSNUpVpUBq2GEVZfa8V3JyodGuSae1ZQXqZd",
    "9cYmgwrRiHS9y57xSuoGFvw7a2Jug15bDgtJwpbDgjqJ",
    "BmxKXa8E6of2kDJMDnrs4NNdiZ6fbtGTYhvN4EyJcHme",
    "4Uw77Awi42HHXXxMjTJRJTBfXtBDA4g6fwCaDbSiWKtM",
  ];
  const week5 = [
    "61zih9sZ5LCthmUZ1rcDoeGdSifZ6JnYESi2o6wmaQew",
    "6t3iWzQwSyuvdVW2da1nzFfwuAhvk654KeBAi7mpxww3",
    "7vJRv1Qm4r6UjZQqKqbMo1KG6ZUs11Thu4SxFGrrhgYW",
    "HEyc6xHRNkbaoL1MxKjYecd76CXaxziY3PAmugSEcatt",
    "EMuQ1V7GTSNUpVpUBq2GEVZfa8V3JyodGuSae1ZQXqZd",
    "HU3PkHJHxHysGLtbdGgMNtmfivLS8BSBkwba1EHHwsz9",
    "9Jcd3gzNzuK6pge2Ei3V4Fop8KvCRxP5UQ1YWTyqfbgu",
    "9cYmgwrRiHS9y57xSuoGFvw7a2Jug15bDgtJwpbDgjqJ",
    "4Uw77Awi42HHXXxMjTJRJTBfXtBDA4g6fwCaDbSiWKtM",
    "CHZMWthFc5iFP9RZEMtYhQPAjHvMCJn6jP3EYjhqgmDW",
    "J9t5ix9Di6Smmdbt6x9KHenkYQUxYwBGYAeP6Uxagcun",
    "BmxKXa8E6of2kDJMDnrs4NNdiZ6fbtGTYhvN4EyJcHme",
  ];
  const week1 = [
    "EMuQ1V7GTSNUpVpUBq2GEVZfa8V3JyodGuSae1ZQXqZd",
    "HNwWewuA5qCF6JUCdT5To9uB5HFMF3681nrkHMHp88QC",
    "BCbcnFSrQLe2U3CDQN2NxifWZCPqvWNX1gj8V9Ntcw85",
    "8ZziGGCD3zStYuBDyA3DcqoeKZdwFvcDoiKq4Ffws1VR",
    "HEyc6xHRNkbaoL1MxKjYecd76CXaxziY3PAmugSEcatt",
    "7vJRv1Qm4r6UjZQqKqbMo1KG6ZUs11Thu4SxFGrrhgYW",
    "EJT2APefSNWioQZM26edpCvQss2deo7ZSXHu4XaQ9MuF",
    "Hg7bWkpGKvP3obtgUNfLxhZqg4jNbppYJkkMxzx1UWBY",
    "CJbGHug8hs6Pk9GUMTCp7QnAZ1tTrit5THJAY5A3yo5C",
    "DCxDAo49YfAZqcHgT5nNkb1VKRDuNrqmEpP95EZUGMSu",
    "cf236WcU1DANd4XzshCDbNhWQvfBgeKoSd8ATCjRryV",
    "CqBzLVZqiTy77PAzujcoLCWCDgYoevokirD3sgdmkoMY",
    "FXUDDoc9rmM4gmepwfmg29b4hXc26qfVhVYRWe5L4NMA",
    "3S9XPhdmb2PyJx33gG5466nYtxp8jpc85RdD2yRyBKfc",
    "9oMqtEbvviCfQysf98VtYRnh7DLECcWktaSi88dk2SZx",
    "HnLKmajjvEc1nZquq8Wtw8VHcrKRWeHD8ARReDHq7y6b",
    "E1w1XmG6fKwgNS3GUYNqyLeqc64ZZGLUedngv7Kdjz9P",
    "HU3PkHJHxHysGLtbdGgMNtmfivLS8BSBkwba1EHHwsz9",
    "84UCjMArTCmFzuVAbHnTXvtpRoHT6FGn8DYig1jdEcXV",
    "2Kir1ArAb8TFLFY4C6Tnfp5S9UkJyBmeJfNqBY8Xn2Mo",
    "4hLU2NEUNrAzgfRxL9Am8i6xa1ur8Xhfc1FCmHXcKyLy",
    "JBr81MX5SAHFYGikUnrNBy9Y7yBYnq1eJ36Qh4T4UnNZ",
    "6t3iWzQwSyuvdVW2da1nzFfwuAhvk654KeBAi7mpxww3",
    "CHZMWthFc5iFP9RZEMtYhQPAjHvMCJn6jP3EYjhqgmDW",
    "AbL4xfNarNm7UGQeM8k1wXdsojJjdR2bJyD7QDU7f576",
    "4Woi6RNqfP2FbB5HYKu8GpZ27LVjbCbQ6EGexhMaJiTg",
    "2GCPWGVrmdDkiZQmZLYhFQzKi1Cpoum4wzrGr58R8y1Z",
    "AsBxeBimjFHFMpxwMr5BrMAqn49cdmnRc33uXJfTPWAu",
    "3S9Y1Ef9XyWQhmfYUkWvgiMnU5Fdvzxu7d2fVbRZ8KLJ",
    "FZDJZqBZfHMV2sF6uLNF3rwntLLdmcrtiEGBFE4LjRzK",
    "9cYmgwrRiHS9y57xSuoGFvw7a2Jug15bDgtJwpbDgjqJ",
    "5Wf2sZpupTo54GP3Vys3RefXJJUqAFcZFGs5za8ZiVUA",
    "DjAqTZ1YADz6ukJK3j1pCCxxm8yr7u7Fezu72DdpTAUB",
    "12C3BwNKvioUssevs4HDHPo5UjnNTG2mzsJto2Qo7fGg",
    "9AdZnDjZZXCZUznad3exPFeXLi4YLSTXziXKNiCTanSb",
    "95v1bd8XXnjHm14hNikQhtqVMvbkLLbpDmZFBM9B11pL",
    "7e1aWpMyjZVU6N7TqKuxYw5TFyciipBRPh4ofdaQVTXx",
    "J9t5ix9Di6Smmdbt6x9KHenkYQUxYwBGYAeP6Uxagcun",
    "4Uw77Awi42HHXXxMjTJRJTBfXtBDA4g6fwCaDbSiWKtM",
    "9Jcd3gzNzuK6pge2Ei3V4Fop8KvCRxP5UQ1YWTyqfbgu",
    "BmxKXa8E6of2kDJMDnrs4NNdiZ6fbtGTYhvN4EyJcHme",
  ];
  const week3 = [
    "6t3iWzQwSyuvdVW2da1nzFfwuAhvk654KeBAi7mpxww3",
    "HU3PkHJHxHysGLtbdGgMNtmfivLS8BSBkwba1EHHwsz9",
    "CHZMWthFc5iFP9RZEMtYhQPAjHvMCJn6jP3EYjhqgmDW",
    "9AdZnDjZZXCZUznad3exPFeXLi4YLSTXziXKNiCTanSb",
    "8ZziGGCD3zStYuBDyA3DcqoeKZdwFvcDoiKq4Ffws1VR",
    "HEyc6xHRNkbaoL1MxKjYecd76CXaxziY3PAmugSEcatt",
    "EMuQ1V7GTSNUpVpUBq2GEVZfa8V3JyodGuSae1ZQXqZd",
    "7vJRv1Qm4r6UjZQqKqbMo1KG6ZUs11Thu4SxFGrrhgYW",
    "9cYmgwrRiHS9y57xSuoGFvw7a2Jug15bDgtJwpbDgjqJ",
    "J9t5ix9Di6Smmdbt6x9KHenkYQUxYwBGYAeP6Uxagcun",
    "BmxKXa8E6of2kDJMDnrs4NNdiZ6fbtGTYhvN4EyJcHme",
    "4Uw77Awi42HHXXxMjTJRJTBfXtBDA4g6fwCaDbSiWKtM",
    "9Jcd3gzNzuK6pge2Ei3V4Fop8KvCRxP5UQ1YWTyqfbgu",
  ];
  const data = [week1, week2, week3, week4, week5];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.length != 44) {
      setResult({
        msg: `Invalid Wallet Address`,
        flag: true,
      });
    } else {
      let count = 0;
      const flag = week5.includes(inputVal);
      data.map((item) => {
        if (item.includes(inputVal)) {
          count++;
        }
      });

      if (count >= 2 && flag) {
        setResult({
          msg: `${inputVal.slice(0, 7)}.... is Eligible, Congrats 🎉🎉`,
          flag: true,
        });
      } else {
        setResult({
          msg: `Unfortunately, you are not eligible for the Certificate 🥲🥹`,
          flag: false,
        });
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-row items-center w-[650px]"
      >
        <Input
          type="text"
          placeholder="Address here"
          onChange={(e) => setInputVal(e.target.value)}
        />{" "}
        <Button />
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
  );
}
