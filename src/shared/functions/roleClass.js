
import {
  ARTIST,
  DESIGNER,
  DEVELOPER,
  DILETTANTE,
} from 'src/shared/constants/role';

export const roleClass = (role,
  roleDevelop,
  roleDesign,
  roleArt,
  roleDabble) => {
  switch (role) {
    case DEVELOPER:
      return roleDevelop;
    case DESIGNER:
      return roleDesign;
    case ARTIST:
      return roleArt;
    case DILETTANTE:
      return roleDabble;
    default:
      return;
  }
}
