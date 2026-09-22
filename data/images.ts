/**
 * Curated documentary-style placeholder photography (Unsplash).
 * Swap these for the organization's real photography when available.
 */
function unsplash(id: string, params = "auto=format&fit=crop&q=80&w=2000") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  heroCommunity: unsplash("1497486751825-1233686d5d80"), // children in community, smiling
  heroVillageChildren: unsplash("1509099836639-18ba1795216d"), // African village children smiling
  kidsPeaceSigns: unsplash("1488521787991-ed7bbaae773c"),
  kidsPlaying: unsplash("1594708767771-a7502209ff51"), // kids playing near a monument
  classroomTeaching: unsplash("1509062522246-3755977927d7"),
  classroomStudents: unsplash("1571260899304-425eee4c7efc"),
  communityChildrenGroup: unsplash("1542810634-71277d95dcbb"), // children sitting together listening
  farmland: unsplash("1592982537447-7440770cbfc9"),
  doctorPhone: unsplash("1576091160399-112ba8d25d1d"),
  elderHands: unsplash("1584515933487-779824d29309"),
  handsReaching: unsplash("1544027993-37dbfe43562a"),
  volunteerGroupStairs: unsplash("1607748862156-7c548e7e98f4"), // group laughing together outdoors
  volunteerFriendsPortrait: unsplash("1517486808906-6ca8b3f04846"), // friends sitting arm-in-arm
  libraryTeamwork: unsplash("1523240795612-9a054b0db644"),
  cafeMeeting: unsplash("1543269865-cbf427effbad"),
  laptopCollaboration: unsplash("1531482615713-2afd69097998"),
  meetingHands: unsplash("1517245386807-bb43f82c33c4"),
  mountainMist: unsplash("1470071459604-3b5ec3a7fe05"),
  mountainSunset: unsplash("1500534623283-312aade485b7"),
  bambooForest: unsplash("1440342359743-84fcb8c21f21"),
  foggyForest: unsplash("1509316975850-ff9c5deb0cd9"),
  wildflowerMeadow: unsplash("1470240731273-7821a6eeb6bd"),
  officeMeeting: unsplash("1521737604893-d14cc237f11d"),
  team1: unsplash("1573497019940-1c28c88b4f3e"), // woman, studio headshot
  team2: unsplash("1531384441138-2736e62e0919"), // man with camera
  team3: unsplash("1573496359142-b8d87734a5a2"), // woman in blazer, office
  team4: unsplash("1560250097-0b93528c311a"), // man, glasses
  team5: unsplash("1618077360395-f3068be8e001"), // warm portrait, bearded man
  team6: unsplash("1580489944761-15a19d654956"), // woman, studio headshot
} as const;

export type ImageKey = keyof typeof images;
