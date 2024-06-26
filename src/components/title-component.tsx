"use client";

type TittleContectAlises = {
  text1: String;
  text2: String;
};

function TitleComponent(text: TittleContectAlises) {
  return (
    <div className="text-center text-customBlue text-lg font-bold uppercase mt-[50px] mb-[30px] ">
      <p className="">{text.text1} </p>
      <h2 className="text-[32px] mt-[5px] transform-none text-customh2 leading-9">
        {text.text2}
      </h2>
    </div>
  );
}

export default TitleComponent;
