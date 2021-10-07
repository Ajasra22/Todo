import React from "react";

function CreateArea(props) {
  const [txt, settxt] = React.useState({ title: "", content: " " });
  function handle(events) {
    const { name, value } = events.target;
    settxt((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function submitted(events) {
    props.onadd(txt);
    settxt({ title: "", content: "" });
    events.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handle}
          placeholder="Title"
          value={txt.title}
        />
        <textarea
          name="content"
          onChange={handle}
          placeholder="Take a note..."
          rows="3"
          value={txt.content}
        />
        <button onClick={submitted}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;