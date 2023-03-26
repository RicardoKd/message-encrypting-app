import { EncryptionTypesEnum } from '../../common/consts';

export interface IDecryptMessageBody {
  messageId: number;
  encryptionType: EncryptionTypesEnum;
}
