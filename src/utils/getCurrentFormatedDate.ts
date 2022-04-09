interface OptionsConfig { 
  year: 'numeric' | '2-digit';
  month: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day: "numeric" | "2-digit";
}

  const options: OptionsConfig = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

const getCurrentFormatedDate = ():string => (
  new Date().toLocaleString('en-US', options)
);

export default getCurrentFormatedDate;