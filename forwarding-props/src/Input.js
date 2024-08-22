export default function Input({richtxt, ...props}) {
    return(
        <>
            {richtxt ? <textarea {...props}></textarea> : <input {...props}></input>} 
        </>
        );
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
}
