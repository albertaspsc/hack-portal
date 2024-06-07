export interface ScanTypeProps {
  /**
   * Raw JSON of the scan.
   */
  data: object;
  /**
   * Name of the scan.
   */
  name: string;
  /**
   * Click callback.
   */
  onClick: () => void;
}
export default function ScanType({ name, onClick }: ScanTypeProps) {
  return (
    <div
      className="md:p-4 p-2 cursor-pointer m-3 bg-complementary rounded-lg text-base-100 hover:bg-primary hover:text-base-100 transition duration-300 ease-in-out h-min"
      onClick={onClick}
    >
      <div className="text-center md:text-lg font-bold">{name}</div>
    </div>
  );
}
