export default function InputBox(props) {
  const { placeholder } = props;
  return (
    <div>
      <form>
        <label>
          <input type="text" placeholder={placeholder} />
        </label>
      </form>
    </div>
  );
}
