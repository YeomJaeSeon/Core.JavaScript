type Heroes = 'Hulk' | 'Thor' | 'Capt'

type HeroProfiles = { [K in Heroes]: number }

const heroInfo: HeroProfiles = {
    Hulk: 10,
    Thor: 1000,
    Capt: 1
}

type Subset<T> = {
    [K in keyof T]?: T[K]
}

interface Person {
    age: number;
    name: string;
}

const ageOnly: Subset<Person> = {
    age: 1
}

const ageOnlyWithPartial: Partial<Person> = {
    age: 2
}

const empty:Subset<Person> = {}

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
  }
  
// function fetchUserProfile(): UserProfile {
//     // ...
// }

// UpdateUserPrfile type UserProfile 이용해서 만들기

type UserProfileUpdate1 = {
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}
// 재사용한게아니라, 새로 만든타입임.

//맵드타입 이용
type UpdateUserProfile2 = {
    [K in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[K]
}

// 향상된 맵드타입
type UpdateUserProfile = {
    [K in keyof UserProfile]?: UserProfile[K]
}

// Partial이요
type UpdateUserProfileWithUtilityType = Partial<UserProfile>




