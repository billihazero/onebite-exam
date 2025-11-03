import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateTodo } from "@/store/todos";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";
export default function TodoEditor() {
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
  });
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };
  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
      />
      {/* 로딩중일때(isPending) disabled되도록 */}
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
