"use client"

import { Bell } from "lucide-react"
import * as React from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"


export function NotificationDropdown() {
  const [notifications, setNotifications] = React.useState([
    { id: 1, message: "New cleaning request in your area!", time: "5 minutes ago" },
    { id: 2, message: "Your next cleaning is scheduled for tomorrow", time: "1 hour ago" },
    { id: 3, message: "Rate your last cleaning experience", time: "1 day ago" },
  ])
  const [unreadCount, setUnreadCount] = React.useState(2)

  const markAllAsRead = React.useCallback(() => {
    setUnreadCount(0)
    setNotifications((prevNotifications) => prevNotifications.map((notif) => ({ ...notif, read: true })))
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

          <Bell
            size={24}
            className={` cursor-pointer transition-colors hover:text-gray-500 ${unreadCount > 0 ? "text-destructive animate-pulse" : ""}`}
          />

      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
      >
        <div className="flex items-center justify-between p-4">
          <p className="text-sm font-medium">
            {unreadCount} New {unreadCount === 1 ? "notification" : "notifications"}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllAsRead}
            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
          >
            Mark all as read
          </Button>
        </div>
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-muted-foreground">No new notifications</div>
        ) : (
          notifications.map((notification, index) => (
            <DropdownMenuItem
              key={notification.id}
              className={`p-4 hover:bg-accent transition-colors duration-200 cursor-pointer ${index < unreadCount ? "bg-accent/50" : ""}`}
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

