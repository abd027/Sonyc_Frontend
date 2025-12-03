export type ChatType = "Normal" | "YouTube" | "Web" | "Git" | "PDF";

export interface Chat {
  id: string;
  title: string;
  type: ChatType;
  createdAt: Date;
  vector_db_collection_id?: string;
}

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}
