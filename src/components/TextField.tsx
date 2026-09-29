interface TextFieldProps {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export function TextField({ id, label, hint, value, onChange, rows = 4 }: TextFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {hint ? (
        <p id={hintId} className="hint">
          {hint}
        </p>
      ) : null}
      {rows <= 1 ? (
        <input
          id={id}
          type="text"
          value={value}
          autoComplete="off"
          aria-describedby={hintId}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <textarea
          id={id}
          rows={rows}
          value={value}
          autoComplete="off"
          aria-describedby={hintId}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </div>
  );
}
