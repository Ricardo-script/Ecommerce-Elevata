import Fontisto from "@expo/vector-icons/Fontisto";
import { useForm } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "./forms";

type SearchInputDataTypes = {
  search: string;
};

type InputSearchProps = TextInputProps & {
  onSearch?: (value: string) => void;
};

export const InputSearch = ({ onSearch, ...rest }: InputSearchProps) => {
  const { control, handleSubmit } = useForm<SearchInputDataTypes>();

  const handleSearch = (data: SearchInputDataTypes) => {
    onSearch?.(data.search);
  };

  return (
    <Input
      name="search"
      control={control}
      returnKeyType="search"
      onSubmitEditing={handleSubmit(handleSearch)}
      iconLeft={<Fontisto name="search" size={18} color="#737687" />}
      placeholderTextColor="#515B70"
      {...rest}
    />
  );
};
