type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
};

export default (props: TextGradientProps) => {
  const from = props.from || "from-chuva-blue from-20%";
  const via = props.via || "via-chuva-green via-50%";
  const to = props.to || "to-chuva-blue to-70%";

  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-[length:300%_100%] animate-gradient`}
    >
      {props.text}
    </span>
  );
};
