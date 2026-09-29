import { categories, evidenceSummary, ratingOptions } from "../content/evidence";
import { useAudit } from "../audit/AuditContext";
import { TextField } from "./TextField";

export function EvidenceMatrix() {
  const { state, setRating, setEvidenceNote } = useAudit();
  const summary = evidenceSummary(state.evidenceRatings);

  return (
    <div className="matrix-wrap">
      <p className="summary-line" role="status">
        {summary}
      </p>
      <div className="matrix">
        {categories.map((category) => {
          const rating = state.evidenceRatings[category.id];
          const note = state.evidenceNotes[category.id];
          const showNote = rating === "weak" || rating === "missing" || note.trim().length > 0;
          return (
            <fieldset key={category.id} className="card rate-card">
              <legend>{category.label}</legend>
              <p className="hint">{category.description}</p>
              <div className="rate-options">
                {ratingOptions.map((option) => (
                  <label key={option.id}>
                    <input
                      type="radio"
                      name={`evidence-${category.id}`}
                      value={option.id}
                      checked={rating === option.id}
                      onChange={() => setRating(category.id, option.id)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              {showNote ? (
                <TextField
                  id={`evidence-note-${category.id}`}
                  label="Which project could strengthen this?"
                  value={note}
                  rows={2}
                  onChange={(value) => setEvidenceNote(category.id, value)}
                />
              ) : null}
            </fieldset>
          );
        })}
      </div>
    </div>
  );
}
