import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MENU_DATA, MenuSection } from '../../data/menu.data';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [NgFor, NgIf, HeaderComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss',
})
export class MenuPageComponent {
  menus = MENU_DATA;

  activeMenuId = signal(this.menus[0]?.id ?? '');

  private selections = signal<Record<string, Set<string>>>({});

  activeMenu = computed<MenuSection | undefined>(() =>
    this.menus.find((m) => m.id === this.activeMenuId()),
  );

  selectedCount = computed(() => {
    const set = this.selections()[this.activeMenuId()];
    return set ? set.size : 0;
  });

  selectedSum = computed(() => {
    const menu = this.activeMenu();
    if (!menu) return 0;

    const set = this.selections()[this.activeMenuId()] ?? new Set<string>();
    return menu.items
      .filter((i) => set.has(i.id))
      .reduce((acc, i) => acc + i.value, 0);
  });

  setActive(menuId: string) {
    this.activeMenuId.set(menuId);
  }

  isChecked(itemId: string) {
    const set = this.selections()[this.activeMenuId()];
    return set ? set.has(itemId) : false;
  }

  toggle(itemId: string) {
    const menuId = this.activeMenuId();
    const current = this.selections();

    const oldSet = current[menuId] ?? new Set<string>();
    const newSet = new Set(oldSet);

    if (newSet.has(itemId)) newSet.delete(itemId);
    else newSet.add(itemId);

    this.selections.set({ ...current, [menuId]: newSet });
  }
}