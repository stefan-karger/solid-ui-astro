import { createSignal } from "solid-js"

import { IconPlaceholder } from "~/components/icon-placeholder"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

export default function DropdownMenuComplex() {
  const [notifications, setNotifications] = createSignal({
    email: true,
    sms: false,
    push: true
  })
  const [theme, setTheme] = createSignal("light")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Button} class="w-fit" variant="outline">
        Complex Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>File</DropdownMenuLabel>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="FileIcon" tabler="IconFile" />
            New File
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="FolderIcon" tabler="IconFolder" />
            New Folder
            <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconPlaceholder class="size-4" lucide="FolderOpenIcon" tabler="IconFolderOpen" />
              Open Recent
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
                <DropdownMenuItem>
                  <IconPlaceholder class="size-4" lucide="FileCodeIcon" tabler="IconFileCode" />
                  Project Alpha
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder class="size-4" lucide="FileCodeIcon" tabler="IconFileCode" />
                  Project Beta
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <IconPlaceholder class="size-4" lucide="EllipsisIcon" tabler="IconDots" />
                    More Projects
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <IconPlaceholder class="size-4" lucide="FileCodeIcon" tabler="IconFileCode" />
                      Project Gamma
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <IconPlaceholder class="size-4" lucide="FileCodeIcon" tabler="IconFileCode" />
                      Project Delta
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconPlaceholder
                    class="size-4"
                    lucide="FolderSearchIcon"
                    tabler="IconFolderSearch"
                  />
                  Browse...
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="SaveIcon" tabler="IconDeviceFloppy" />
            Save
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="DownloadIcon" tabler="IconDownload" />
            Export
            <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={notifications().email}
            onChange={(checked) =>
              setNotifications((prev) => ({ ...prev, email: checked === true }))
            }
          >
            <IconPlaceholder class="size-4" lucide="EyeIcon" tabler="IconEye" />
            Show Sidebar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={notifications().sms}
            onChange={(checked) => setNotifications((prev) => ({ ...prev, sms: checked === true }))}
          >
            <IconPlaceholder class="size-4" lucide="LayoutPanelTopIcon" tabler="IconLayout" />
            Show Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconPlaceholder class="size-4" lucide="PaletteIcon" tabler="IconPalette" />
              Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuRadioGroup onChange={setTheme} value={theme()}>
                  <DropdownMenuRadioItem value="light">
                    <IconPlaceholder class="size-4" lucide="SunIcon" tabler="IconSun" />
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    <IconPlaceholder class="size-4" lucide="MoonIcon" tabler="IconMoon" />
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    <IconPlaceholder
                      class="size-4"
                      lucide="MonitorIcon"
                      tabler="IconDeviceDesktop"
                    />
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="UserIcon" tabler="IconUser" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="CreditCardIcon" tabler="IconCreditCard" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconPlaceholder class="size-4" lucide="SettingsIcon" tabler="IconSettings" />
              Settings
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                <DropdownMenuItem>
                  <IconPlaceholder class="size-4" lucide="KeyboardIcon" tabler="IconKeyboard" />
                  Keyboard Shortcuts
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder class="size-4" lucide="LanguagesIcon" tabler="IconLanguage" />
                  Language
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <IconPlaceholder class="size-4" lucide="BellIcon" tabler="IconBell" />
                    Notifications
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Notification Types</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={notifications().push}
                        onChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, push: checked === true }))
                        }
                      >
                        <IconPlaceholder class="size-4" lucide="BellIcon" tabler="IconBell" />
                        Push Notifications
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={notifications().email}
                        onChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, email: checked === true }))
                        }
                      >
                        <IconPlaceholder class="size-4" lucide="MailIcon" tabler="IconMail" />
                        Email Notifications
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconPlaceholder class="size-4" lucide="ShieldIcon" tabler="IconShield" />
                  Privacy and Security
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="CircleQuestionMark" tabler="IconHelpCircle" />
            Help and Support
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder class="size-4" lucide="FileTextIcon" tabler="IconFileText" />
            Documentation
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <IconPlaceholder class="size-4" lucide="LogOutIcon" tabler="IconLogout" />
            Sign Out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
