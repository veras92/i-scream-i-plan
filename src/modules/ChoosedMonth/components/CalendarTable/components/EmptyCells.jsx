export function EmptyCells(firstDayOfMonth) {
  return Array.from({ length: firstDayOfMonth }, (_, index) => (
    <td key={`empty-${index}`}></td>
  ));
}
