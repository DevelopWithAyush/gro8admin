import { SyndicateMetadata } from '@/store/features/dashboardApi';

const Profile = ({ data }: { data?: SyndicateMetadata }) => {
  const primaryDetails = data?.profile?.primaryDetails;

  return (
    <div className="p-5 w-full border border-solid border-[#E8E8F1] overflow-hidden rounded-[12px] bg-[#FFF] flex flex-col items-start justify-start gap-[12px] ">
      <p className="text-[#26252F] font-urbanist-regular_400 text-[25px] leading-[110%] ">
        Syndicate Profile
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-5">
        <ProfileItem label="Inception" value={primaryDetails?.roundBeginningDate || '-'} />
        <ProfileItem label="Region" value={primaryDetails?.city || '-'} />
        <ProfileItem label="Country" value={primaryDetails?.country || '-'} />
        <ProfileItem label="State" value={primaryDetails?.state || '-'} />
        <ProfileItem label="Website" value={primaryDetails?.website || '-'} />
        <ProfileItem label="Owner" value={primaryDetails?.ownerName || '-'} />
      </div>
    </div>
  );
};

const ProfileItem = ({ label, value }: { label: string; value: string }) => (
  <div className="col-span-1 flex flex-col items-start justify-start gap-1">
    <p className="text-[#696971] font-rubik-light_300 text-[12px] leading-[110%]">
      {label}
    </p>
    <p className="text-[#000] font-rubik-regular_400 text-[16px] leading-normal">
      {value}
    </p>
  </div>
);

export default Profile;
