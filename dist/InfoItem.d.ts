/// <reference types="react" />
interface InfoItemProps {
    label: string;
    children: string;
    color?: string;
}
declare function InfoItem({ label, children, color }: InfoItemProps): JSX.Element;
export default InfoItem;
