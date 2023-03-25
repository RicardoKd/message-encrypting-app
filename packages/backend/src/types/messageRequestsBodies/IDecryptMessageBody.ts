import { EncryptionTypesEnum } from '../../constants';

export interface IDecryptMessageBody {
  messageId: number;
  encryptionType: EncryptionTypesEnum;
}
