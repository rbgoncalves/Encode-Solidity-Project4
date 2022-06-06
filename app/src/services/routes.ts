import { BACKEND_BASE_URL } from "../config";

export const IPFS_GET = (id: string) => `${BACKEND_BASE_URL}/ipfs-get/${id}`