import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';

export function AppSwitch({
  label,
  id,
  onChange,
  checked,
}: {
  label?: string;
  id: string;
  onChange: (value: boolean) => void;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center space-x-6">
      <Label htmlFor={id}>{label}</Label>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-white data-[state=unchecked]:bg-gray-500"
      />
    </div>
  );
}
