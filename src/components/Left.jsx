import {
  HomeIcon,
  BellIcon,
  HeartIcon,
  EnvelopeIcon,
  WalletIcon,
  StarIcon,
  UserIcon,
  Cog8ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import LeftComponents from "./LeftComponents";
const Left = ({ onLogout }) => {
  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="shadow-lg text-2xl w-64 h-20 rounded-lg uppercase flex items-center justify-center">
          Logo
        </div>
        <div className="shadow-lg bg-white w-64 mt-6 pt-4 h-[550px] rounded-xl flex flex-col justify-between">
          <div>
            <LeftComponents Icon={HomeIcon} title="Home" />
            <LeftComponents Icon={BellIcon} title="Notification" />
            <LeftComponents Icon={HeartIcon} title="Shop" />
            <LeftComponents Icon={EnvelopeIcon} title="Conversation" />
            <LeftComponents Icon={WalletIcon} title="Wallet" />
            <LeftComponents Icon={StarIcon} title="Subscription" />
            <LeftComponents Icon={UserIcon} title="My Profile" />
            <LeftComponents Icon={Cog8ToothIcon} title="Settings" />
          </div>
          <LeftComponents Icon={ArrowRightOnRectangleIcon} title="Log out" onClick={handleLogout} />
        </div>
      </div>
    </>
  );
};
export default Left;
