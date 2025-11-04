'use client';

import { Text } from '@/components/Text';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { useAutoLogout } from '@/lib/hooks/useAutoLogout';

export default function DashboardPage() {
  // Auto logout setelah 5 menit tidak ada aktivitas
  useAutoLogout({ idleTime: 300000 }); // 5 menit = 300000ms

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Text variant={'heading'} level={'h1'}>
        Hello Indonesia Ku cinta
      </Text>
      <div className="bg-white">
        <Icon name={'calendar'} />
      </div>
      <Link href={'/docs'} className={'text-white'}>
        Lihat Docs
      </Link>
    </div>
  );
}
