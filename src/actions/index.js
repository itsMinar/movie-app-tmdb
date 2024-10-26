'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

let watchList = [];

export async function toggleWatchList(movie) {
  if (!watchList.some((item) => item.id === movie.id)) {
    watchList.push(movie);
  } else {
    watchList = watchList.filter((item) => item.id !== movie.id);
  }

  revalidatePath('/watchlist');
  revalidatePath(`/movies/${movie.id}`);
}

export async function getWatchList() {
  return watchList;
}

export async function isAddedToWatchList(movieId) {
  return watchList.some((item) => item.id === movieId);
}

// mock login and logout action
export async function login() {
  cookies().set('auth', 'success');
  revalidatePath('/watchlist');
  redirect('/watchlist');
}

export async function logout() {
  cookies().delete('auth');
  revalidatePath('/watchlist');
  redirect('/');
}
